import {useState} from 'react';
import Section from "components/Section/Section";
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from "components/Searchbar/Searchbar";

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputSubmit = (searchValue) => {
    setSearchValue(searchValue.toLowerCase());
   };

  return (
    <>
      <Searchbar onSubmit={handleInputSubmit} />
      
      <Section>
        <ImageGallery searchValue={searchValue} />
      </Section>
    </> 
  )
 };

// class App extends Component {
//   state = {
//     searchValue: ''
//   }
  
//   handleInputSubmit = (searchValue) => {
//     this.setState({searchValue: searchValue.toLowerCase()})
//   }
  
//   render() {
//     return (
      // <>
      //   <Searchbar onSubmit={this.handleInputSubmit} />
        
      //   <Section>
      //     <ImageGallery searchValue={this.state.searchValue} />
      //   </Section>
      // </> 
//     )
//   }
// };

export default App;