import 'modern-normalize';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { fetchImageGallery } from './services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import SearchBar from './components/SearchBar/SearchBar';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
import ImageModal from './components/ImageModal/ImageModal';
import { Image } from './types';

const App = () => {
  const [imageGallery, setImageGallery] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState(0);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | Image>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsLoading(true);
        setBtnLoadMore(false)
        setIsError(false);
        const response = await fetchImageGallery(query, page);
        setImageGallery(prevImages => [...prevImages, ...response.results]);

        if (response.total_pages === page) {
          toast('All images loaded!', {
            icon: '🏁',
          });
          setBtnLoadMore(false);
        } else {
          setBtnLoadMore(response.total_pages > page);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong');
        setIsError(true);
        setBtnLoadMore(false);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = (query: string) => {
    if (query === '') {
      setBtnLoadMore(false);
    }
    setImageGallery([]);
    setQuery(query);
    setPage(1);
  };

  const handlePage = () => {
    setPage(prev => prev + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleChangeQuery} />
      {isLoading && <Loader />}
      <ImageGallery images={imageGallery} onImageClick={handleImageClick} />
      {isError && <ErrorMessage />}
      {btnLoadMore && <LoadMoreBtn onClick={handlePage} />}
      <ImageModal
        image={selectedImage}
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
