import axios from 'axios'

// pending...

const onSubmit = async (e) => {
    await axios.post(`https://localhost:4000/${id}/comments`, {
        content
    })
}