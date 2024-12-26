import { IsNotEmpty, isNotEmpty, IsString, IsInt, IsOptional } from "class-validator";

export type Weather = {
    wind: string,
    temperature: string,
    aqi: {
        co: number,
        no2: number,
        o3: number,
        so2: number,
        pm2_5: number,
        pm10: number,
        "us-epa-index": number,
        "gb-defra-index": number
    }
} 

export class DetailsDTO{
    @IsString()
    @IsNotEmpty()
    location?: string;

    @IsInt()
    @IsOptional()
    days: number;
}


