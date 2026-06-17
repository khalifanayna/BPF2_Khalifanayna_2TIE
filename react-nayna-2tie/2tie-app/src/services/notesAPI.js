import axios from 'axios'

const API_URL = "https://qhmtjfcpzqawruehighv.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobXRqZmNwenFhd3J1ZWhpZ2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYxOTMsImV4cCI6MjA5NzIxMjE5M30.PtdLMfWG5Syzu8Sp2GlxZPavmN8cPVG1wR4siHRfcjQ"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    }
}