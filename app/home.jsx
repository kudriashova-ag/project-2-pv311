import React, { use } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ThemeView from '../components/ThemeView';
import ThemeText from '../components/ThemeText';
import BookCard from '../components/BookCard';

const books = [
  {
    id: 1,
    title: "Сто років самотності",
    author: "Габріель Ґарсія Маркес",
    year: 1967,
    pages: 417,
    genres: ["магічний реалізм", "роман"],
    rating: 4.7,
    cover: "https://picsum.photos/400/300", // заміни на реальні URL якщо потрібно
    description: "Епічна сага родини Буендіа у вигаданому містечку Макондо.",
    isRead: false,
  },
  {
    id: 2,
    title: "Майстер і Маргарита",
    author: "Михайло Булгаков",
    year: 1966,
    pages: 384,
    genres: ["фантастика", "сатира"],
    rating: 4.8,
    cover: "https://picsum.photos/400/300",
    description:
      "Поєднання сатири, філософії і містики в Ленінграді та в Єрусалимі.",
    isRead: true,
  },
  {
    id: 3,
    title: "Великий Гетсбі",
    author: "Ф. Скотт Фіцджеральд",
    year: 1925,
    pages: 180,
    genres: ["класика", "роман"],
    rating: 4.2,
    cover: "https://picsum.photos/400/300",
    description: "Історія про мрії, кохання й ілюзії Американської мрії.",
    isRead: false,
  },
  {
    id: 4,
    title: "1984",
    author: "Джордж Орвелл",
    year: 1949,
    pages: 328,
    genres: ["дистопія", "політична проза"],
    rating: 4.6,
    cover: "https://picsum.photos/400/300",
    description:
      "Класична антиутопія про тотальний контроль і маніпуляцію правдою.",
    isRead: true,
  },
  {
    id: 5,
    title: "Sapiens: Коротка історія людства",
    author: "Юваль Ной Харарі",
    year: 2011,
    pages: 498,
    genres: ["науково-популярна", "історія"],
    rating: 4.5,
    cover: "https://picsum.photos/400/300",
    description:
      "Огляд головних етапів розвитку Homo sapiens — від мисливців-збирачів до сьогодення.",
    isRead: false,
  },
  {
    id: 6,
    title: "Алхімік",
    author: "Пауло Коельйо",
    year: 1988,
    pages: 208,
    genres: ["філософія", "роман"],
    rating: 4.0,
    cover: "https://picsum.photos/400/300",
    description: "Проста притча про пошук свого призначення і мрій.",
    isRead: true,
  },
  {
    id: 7,
    title: "Кіднеппінг",
    author: "Марія Іванова",
    year: 2020,
    pages: 320,
    genres: ["детектив", "сучасна проза"],
    rating: 4.1,
    cover: "https://picsum.photos/400/300",
    description: "Сучасний український детектив (вигаданий приклад).",
    isRead: false,
  },
  {
    id: 8,
    title: "Поклик пралісу",
    author: "Анна Петрова",
    year: 2018,
    pages: 256,
    genres: ["екологічна проза", "подорожі"],
    rating: 4.3,
    cover: "https://picsum.photos/400/300",
    description:
      "Розповідь про досвід життя в гармонії з природою (вигаданий приклад).",
    isRead: false,
  },
];


const Home = () => {
    
    return (
        <ThemeView style={{flex: 1}}>
            <FlatList
                data={books}
                renderItem={({ item }) => <BookCard book={item} />} />
        </ThemeView>
    );
}

const styles = StyleSheet.create({})

export default Home;
