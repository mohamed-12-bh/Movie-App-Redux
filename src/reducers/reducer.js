import { ADD_MOVIE, DELETE_MOVIE, EDITE_MOVIE } from "../actions/typeActions";

const initialState = {
  films: [
    {
      src:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/18/11/13/11/42/1696141.jpg",
      name: "Spider Man",
      rating: 3,
      trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
      id: 23
    },

    {
      src: "https://images-na.ssl-images-amazon.com/images/I/51jEvflYHvL.jpg",
      name: "The Lion King",
      rating: 5,
      trailer: "https://www.youtube.com/embed/7TavVZMewpY",
      id: 102
    },
    {
      src:
        "https://www.thecameroontoday.com/wp-content/uploads/2019/08/Capture1-1.png",
      name: "Fast && Furious",
      rating: 5,
      id: 1023,
      trailer: "https://www.youtube.com/embed/HZ7PAyCDwEg"
    },
    {
      src:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/14/01/22/18/38/106417.jpg",
      name: "Need For Speed",
      rating: 2,
      id: 115,
      trailer: "https://www.youtube.com/embed/9ewiJJe_nYI"
    }
  ]
};
const reducerMovie = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      let movie={...action.payload,id:new Date()}
      console.log(movie)
      return { ...state, films: [...state.films, movie ]};
      

    case DELETE_MOVIE:
      console.log(action.payload);

      return {
        ...state,
        films: state.films.filter(el => el.id !== action.payload)
      };

    case EDITE_MOVIE:
      return {
        ...state,
        films: state.films.map(el =>
          el.id === action.payload.id
            ? {
                ...el,
                name: action.payload.name,
                src: action.payload.src,
                rating: action.payload.rating
              }
            : el
        )
      };

    default:
      return state;
  }
};

export default reducerMovie;
