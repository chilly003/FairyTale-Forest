// 동화책 목록 조회
export interface Book {
  book_id: number;
  title: string;
}

export interface GetBookListResponse {
  status: number;
  success: boolean;
  data: {
    message: string;
    data: {
      book: Book[];
    };
  };
  timeStamp: string;
}

// 편지 목록 조회 
export interface Letter {
  letter_id: number;
  character_id: number;
  character_name: string;
  character_image_url: string | null;
  is_read: boolean;
  created_at: string;
  messageType: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface LetterSliceData {
  content: Letter[];
  pageable: Pageable;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface GetLetterListResponse {
  success: boolean;
  status: number;
  data: LetterSliceData;
  timeStamp: string;
}