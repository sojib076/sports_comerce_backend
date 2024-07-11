export type TerrorSource = {path: string | number, message: string,}[]
export type TErrorSources = {
    path: string | number;
    message: string;
  }[];
  
  export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorSources: TErrorSources;
  };