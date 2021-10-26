import { config } from 'config/Constants';
import { Request, Response } from 'express';
import shortid from 'shortid'


export class URLController {
  public async shorten(req: Request, response: Response): Promise<void> {
    // Verificar se a URL já nao existe
    // Criar o hash para essa URL
    const { originURL } = req.body
    const hash = shortid.generate()
    const shortURL = `${config.API_URL}/${hash}`

    // Salvar a URL no banco
    // Retornar a URL que a gente salvou
    response.json({originURL, hash, shortURL})
  }
}