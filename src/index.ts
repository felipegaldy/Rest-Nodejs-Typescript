
import express, {Request, Response, NextFunction} from 'express';
import usersRoute from '../src/routes/usersRoute'


const app =  express();

//configuração de rota
app.use(usersRoute);

//configuração da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//configuração de rota
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar'});
} );

//inicialização do servidor
app.listen(3000, () => {
    console.log('Hello Word 3000');
});