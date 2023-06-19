import Aluno from '../models/Aluno';

class HomeControler {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Fabri',
      email: 'maria@gmail.com',
      idade: 22,
      peso: 57,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeControler();
