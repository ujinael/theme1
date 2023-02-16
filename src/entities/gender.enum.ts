export const Gender = {
    MAN:"man",
    WOMAN:"woman"
    } as const
     type ObjectValues<T> = T[keyof T] 
     export type Gender = ObjectValues<typeof Gender>
   