import { ImageSourcePropType } from 'react-native';

export interface Recipe {
  id: string;
  title: string;
  category: 'Sobremesa' | 'Massa' | 'Fitness' | 'Salada' | 'Prato Principal';
  image: ImageSourcePropType;
  author: {
    name: string;
    avatar: string;
  };
  time: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
}

export const RECIPES: Recipe[] = [
  {
    id: 'feijoada',
    title: 'Feijoada Brasileira',
    category: 'Prato Principal',
    image: require('../assets/recipes/feijoada.jpg'),
    author: { name: 'Carlos Silva', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    time: '2h 30min',
    rating: 4.9,
    ingredients: ['1kg de feijão preto', '200g de bacon', '2 linguiças calabresas', '300g de costelinha de porco', 'Couve, laranja e farofa para acompanhar'],
    instructions: [
      'Deixe o feijão de molho por 12 horas.',
      'Em uma panela grande, cozinhe o feijão e as carnes.',
      'Faça um refogado com alho e cebola e adicione à panela.',
      'Sirva com os acompanhamentos.',
    ],
  },
  {
    id: 'bolo-de-chocolate',
    title: 'Bolo de Chocolate Fitness',
    category: 'Sobremesa',
    image: require('../assets/recipes/bolo-de-chocolate.jpg'),
    author: { name: 'Ana Fitness', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    time: '50min',
    rating: 4.7,
    ingredients: ['3 ovos', '1 xícara de cacau em pó', '1/2 xícara de óleo de coco', '1 xícara de farinha de aveia', 'Adoçante a gosto'],
    instructions: [
      'Bata os ovos, o óleo e o adoçante no liquidificador.',
      'Adicione o cacau e a farinha e bata mais um pouco.',
      'Leve ao forno pré-aquecido a 180ºC por 30 minutos.',
    ],
  },
  {
    id: 'macarrao-alho-e-oleo',
    title: 'Macarrão Alho e Óleo',
    category: 'Massa',
    image: require('../assets/recipes/macarrao-alho-e-oleo.jpg'),
    author: { name: 'Chef Juna', avatar: 'https://randomuser.me/api/portraits/women/45.jpg' },
    time: '20min',
    rating: 4.5,
    ingredients: ['250g de espaguete', '5 dentes de alho', 'Azeite de oliva a gosto', 'Sal e pimenta do reino a gosto', 'Salsinha picada'],
    instructions: [
      'Cozinhe o macarrão conforme as instruções da embalagem.',
      'Enquanto isso, doure o alho fatiado no azeite.',
      'Escorra o macarrão e misture ao alho dourado.',
      'Tempere com sal, pimenta e salsinha.',
    ],
  },
  {
    id: 'salada-caesar',
    title: 'Salada Caesar Clássica',
    category: 'Salada',
    image: require('../assets/recipes/salada-caesar.jpg'),
    author: { name: 'Juliana Costa', avatar: 'https://randomuser.me/api/portraits/women/46.jpg' },
    time: '15min',
    rating: 4.6,
    ingredients: ['1 alface romana', '100g de frango grelhado em tiras', '50g de croutons', '50g de queijo parmesão ralado', 'Molho Caesar a gosto'],
    instructions: [
      'Lave e seque bem as folhas de alface.',
      'Em uma saladeira, misture a alface, o frango e os croutons.',
      'Regue com o molho Caesar e misture delicadamente.',
      'Finalize com o queijo parmesão ralado por cima.',
    ],
  },
  {
    id: 'frango-grelhado-brocolis',
    title: 'Frango Grelhado com Brócolis',
    category: 'Fitness',
    image: require('../assets/recipes/frango-grelhado-brocolis.jpg'),
    author: { name: 'Marcos Fit', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
    time: '25min',
    rating: 4.8,
    ingredients: ['2 filés de frango', '1 maço de brócolis', 'Azeite', 'Sal, pimenta e limão a gosto'],
    instructions: [
      'Tempere os filés de frango com sal, pimenta e limão.',
      'Grelhe os filés em uma frigideira quente com um fio de azeite.',
      'Cozinhe o brócolis no vapor até ficar al dente.',
      'Sirva o frango com o brócolis ao lado.',
    ],
  },
  {
    id: 'risoto-de-camarao',
    title: 'Risoto de Camarão Cremoso',
    category: 'Prato Principal',
    image: require('../assets/recipes/risoto-de-camarao.jpg'),
    author: { name: 'Chef Isabella', avatar: 'https://randomuser.me/api/portraits/women/47.jpg' },
    time: '40min',
    rating: 4.9,
    ingredients: ['200g de arroz arbóreo', '300g de camarão limpo', '1/2 cebola picada', '1 taça de vinho branco seco', '1 litro de caldo de legumes', 'Queijo parmesão e manteiga para finalizar'],
    instructions: [
      'Refogue a cebola na manteiga, adicione o arroz e frite um pouco.',
      'Adicione o vinho branco e deixe evaporar.',
      'Vá adicionando o caldo de legumes quente, concha por concha, mexendo sempre.',
      'Quando o arroz estiver quase no ponto, adicione os camarões e cozinhe por 3 minutos.',
      'Finalize com manteiga e queijo parmesão.'
    ]
  },
  {
    id: 'mousse-de-maracuja',
    title: 'Mousse de Maracujá Rápido',
    category: 'Sobremesa',
    image: require('../assets/recipes/mousse-de-maracuja.jpg'),
    author: { name: 'Dona Benta', avatar: 'https://randomuser.me/api/portraits/women/48.jpg' },
    time: '10min + geladeira',
    rating: 5.0,
    ingredients: ['1 lata de leite condensado', '1 lata de creme de leite', '1 lata de suco de maracujá concentrado (use a lata de leite condensado como medida)'],
    instructions: [
      'Bata todos os ingredientes no liquidificador por cerca de 3 minutos.',
      'Despeje em um refratário ou em taças individuais.',
      'Leve à geladeira por pelo menos 2 horas antes de servir.'
    ]
  }
];