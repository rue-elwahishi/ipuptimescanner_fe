import { useQuery } from "./custom_hooks";
export  function PostClientEndpoint() {
    return useQuery(data => ({
        url:'/clients',
        method:'POST',
        data
    }))
};

export function GetClientEndpoint(){
    return useQuery(() => ({
        url:'/clients',
        method:'GET'
    }))
};

export function DeleteClientEndpoint(){
    return useQuery(id => ({
        url:`clients/${id}`,
        method:'DELETE'
    }))
}