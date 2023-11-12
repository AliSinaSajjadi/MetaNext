import axios from "axios"
import  {useQuery } from 'react-query';


export const postOtp = (otp) => {

        const requestData = {
            secret :sessionStorage.getItem("secret"),
            otp: otp,
           
        };

    
        console.log(requestData);
           return axios.post(
                "https://demo1.metanext.biz/api/v1/auth/otp",
                requestData)

        
    }
    export const useOtpApi = (otp) => {
        return  useQuery("otpAPI" , ()=> postOtp(otp) ,{ enabled : false} );
      };