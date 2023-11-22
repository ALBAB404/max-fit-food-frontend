// All Import File  Code Is Here......................................................................................................
import { defineStore } from 'pinia'
import axiosInstance from "@/services/axiosService.js";




export const useProduct = defineStore('product', {
  // All Variable  Code Is Here.....................................................................................................
  state: () => ({ 
    products: {},
    recentProducts: {},
    loading: false,
  }),
  
  actions: {
    // API Calling Code Is Here.....................................................................................................
    
    async getData() {
      try {
        const res = await axiosInstance.get("/products");
        if (res.status === 200) {
            this.products = res.data.result
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response.data) {
          return new Promise((reject) => {
            reject(error.response.data);
          });
        }
      }
    },

    async getRecentProductData() {
      try {
        const res = await axiosInstance.get("/recent-products");
        if (res.status === 200) {
            this.recentProducts = res.data.result
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response.data) {
          return new Promise((reject) => {
            reject(error.response.data);
          });
        }
      }
    },

  },
  })
  // All Function  Code Is Here.....................................................................................................