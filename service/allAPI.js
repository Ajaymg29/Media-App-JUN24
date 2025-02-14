import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";


// Upload a video
export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// Get All Video
export const getAlluploadedVideosAPI = async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}

// Get a Video
export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// delete a video
export const deleteVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

// Add History
export const addHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
}

// Get History
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// Delete a History
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

// Add category
export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)
}

// Get category
export const getCategoryAPI = async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

// Delete category
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// Update Category
export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}