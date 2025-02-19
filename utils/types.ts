export interface Image {
  // only included the properties i'll use
  
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  }
  user: {
    name: string;
    location: string;
  }
  alt_description: string;
}