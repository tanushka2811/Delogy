
export interface ContactFormPayload {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  serviceNeeded: string;        
  projectDescription: string;   
 
}

// Response returned by the API
export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: unknown; 
  error?: string; 
}
