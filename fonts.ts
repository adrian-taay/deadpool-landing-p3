import { Poppins, Road_Rage } from "next/font/google";

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const roadRage = Road_Rage({subsets: ['latin'],
  weight: ['400']});