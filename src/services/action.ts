/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { cookies } from 'next/headers';
import { decodedToken } from '@/utils/jwt';



export const getUserInfo = async () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get('mui-token')?.value;
  
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase()
    };
  }

  return null;
};
