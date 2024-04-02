import { z } from 'zod'


const schemaPost = z.object({
    content: z.string().min(5),
    title: z.string().min(5),
}
)

export default schemaPost