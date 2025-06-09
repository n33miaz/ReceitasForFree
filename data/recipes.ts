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
  // mais receitas aqui
];