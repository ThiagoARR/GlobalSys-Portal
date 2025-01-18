import { MenuItem } from '@/models/menu-item'

const API_URL = 'https://localhost:7288'
const API_KEY = ''

if (!API_KEY) {
  console.error('API_KEY is not set. Please check your environment variables.')
}

export async function fetchMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await fetch(`${API_URL}/itemMenu`, {
      headers: {
        'X-API-KEY': 'f8f8133b-4c59-4ae2-9c1b-8e1b73aa8664',
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch menu items')
    }
    const data: MenuItem[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching menu items:', error)
    throw error
  }
}
