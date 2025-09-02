import { api } from "@/utils/auth/authorApi";

export async function getPaymentSummary() {
  try {
    const res = await api.get("/author/earnings/summary");
    
    return res.data;
  } catch (error) {
    
    return null; 
  }
}

export async function getRecentSales() {
  try {
    const res = await api.get("/author/earnings/recent_sales");
    return res.data.recent_sales || [];
  } catch (error) {
  
    return [];
  }
}
