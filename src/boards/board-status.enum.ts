//디비 연결로 로컬데이터 필요없어짐.
// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
