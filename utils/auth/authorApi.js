import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add request interceptor to ensure credentials are always sent
api.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    // Ensure SameSite and other cookie headers work in production
    if (typeof window !== "undefined") {
      config.headers["X-Requested-With"] = "XMLHttpRequest";
    }

    // Debug logging for production issues
    if (process.env.NODE_ENV === "production") {
      console.log("🚀 API Request:", {
        url: config.url,
        baseURL: config.baseURL,
        withCredentials: config.withCredentials,
        method: config.method,
        headers: config.headers,
      });

      // Log cookies being sent
      if (typeof document !== "undefined") {
        console.log("🍪 Current cookies:", document.cookie);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "production") {
      console.log("✅ API Success:", {
        url: response.config?.url,
        status: response.status,
        headers: response.headers,
      });
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("🔒 Authentication failed:", {
        url: error.config?.url,
        status: error.response?.status,
        data: error.response?.data,
        responseHeaders: error.response?.headers,
      });

      // Log current cookies when auth fails
      if (typeof document !== "undefined") {
        console.log("🍪 Cookies during auth failure:", document.cookie);
      }
    }
    return Promise.reject(error);
  }
);

// Register an author
// Register an author
export const registerAuthor = async (email, password, captchaToken) => {
  try {
    const response = await api.post("/authors", {
      author: { email, password, captchaToken },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Forget password reset
export const resetPassword = async (req, res) => {
  try {
    const apiRes = await api.post(`/authors/password`, req.body);
    res.status(apiRes.status).json(apiRes.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { errors: ["Server error"] });
  }
};

// Enable 2FA Email Verification

export const enableEmailTwoFactor = async () => {
  try {
    const { status } = await api.post("/authors/two_factor/enable_email");

    if (status.code !== 200) {
      throw new Error(status.message);
    }

    return true;
  } catch (error) {
    throw new Error(
      `Failed to enable email two-factor: ${error ? error.message : String(error)}`
    );
  }
};

// Sign in an author
export const signInAuthor = async (email, password, captchaToken) => {
  try {
    const response = await api.post("/authors/sign_in", {
      author: { email, password, captchaToken },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Sign out an author
export const signOutAuthor = async () => {
  try {
    await api.delete("/authors/sign_out");
    localStorage.removeItem("authorInfo");

    return { success: true };
  } catch (error) {
    console.error("Sign-out failed:", error.response?.data || error);
  }
};

// Get Author Profile (GET /authors/profile)
export const getAuthorProfile = async () => {
  try {
    const response = await api.get("/authors/profile");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch author profile:",
      error.response?.data || error
    );
    throw error;
  }
};

// Create Author Profile (POST /authors/profile)
export const createAuthorProfile = async (authorData, imageFile) => {
  try {
    const formData = new FormData();
    for (const key in authorData) {
      formData.append(`author[${key}]`, authorData[key]);
    }
    if (imageFile) {
      formData.append("author[author_profile_image]", imageFile);
    }

    const response = await api.post("/authors/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to create profile:", error.response?.data || error);
    throw error;
  }
};

// Update Author Profile (PUT or PATCH /authors/profile)
export const updateAuthorProfile = async (authorData, imageFile) => {
  try {
    const formData = new FormData();
    for (const key in authorData) {
      formData.append(`author[${key}]`, authorData[key]);
    }
    if (imageFile) {
      formData.append("author[author_profile_image]", imageFile);
    }

    const response = await api.patch("/authors/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to update profile:", error.response?.data || error);
    throw error;
  }
};

// Update Author Profile (PUT or PATCH /authors/profile)
export const updateAuthorProfileImg = async (imageFile) => {
  try {
    const formData = new FormData();
    if (imageFile) {
      formData.append("author[author_profile_image]", imageFile);
    }

    const response = await api.patch("/authors/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to update profile:", error.response?.data || error);
    throw error;
  }
};
