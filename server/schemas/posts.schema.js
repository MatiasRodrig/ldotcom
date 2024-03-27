import { z } from 'zod'


export const schemaPost = z.object(
    title = z.string().min(5),
    content = z.string().min(5),
    author = z.string().min(5)
)

