
import express, {Request, Response, NextFunction} from 'express';
import usersRoute from '../src/routes/usersRoute'
import errorHandler from './middlewares/errorHandlerMiddleware';


const app =  express();


//configuração da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//configuração de rota
app.use(usersRoute);

//configuração de rota status
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar'});
} );

//configuração dos handlers de Erro
app.use(errorHandler)

//inicialização do servidor
app.listen(3000, () => {
    console.log('Hello Word 3000');
});