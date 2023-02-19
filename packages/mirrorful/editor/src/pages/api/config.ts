import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { rootPath, store } from '../../store/store'

const readStorageFile = async (): Promise<{ colorData: string[] }> => {
  const data = await fs.promises.readFile(`${rootPath}/store.json`, 'utf8')
  return JSON.parse(data)
}

const deleteStorageFile = async () => {
  try {
    await fs.promises.rm(`${rootPath}/store.json`)
  } catch (e) {
    console.error(`Not an important error:` + e)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tokens = store.get('tokens')

  // Handle migration from old storage file
  try {
    const data = await readStorageF