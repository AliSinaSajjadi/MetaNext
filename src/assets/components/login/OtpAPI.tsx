import axios from "axios";
import { useQuery, UseQueryResult } from 'react-query';

interface PostOtpData {
  secret: string | null;
  otp: string;
}

export const postOtp = (otp: string) => {
  const requestData: PostOtpData = {
    secret: sessionStorage.getItem("secret"),
    otp: otp,
  };

  console.log(requestData);

  return axios.post("https://demo1.metanext.biz/api/v1/auth/otp", requestData);
};

export const useOtpApi = (otp: string): UseQueryResult<any> => {
  return useQuery("otpAPI", () => postOtp(otp), { enabled: false });
};
