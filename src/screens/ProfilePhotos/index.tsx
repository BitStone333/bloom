import React, {useCallback, useLayoutEffect} from 'react';
import {View, ActivityIndicator, FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addPhoto, getPhotos, removePhoto} from '../../redux/actions';
import {IAppState} from '../../redux';
import {Photo} from '../../components';
import styles from './styles';

const ADD_PHOTO_URL =
  'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/03/14/897865-bill-gates.jpg';

const ProfilePhotos: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading, photos} = useSelector((state: IAppState) => state.member);

  const getPhotosRequest = useCallback(() => dispatch(getPhotos('1')), [
    dispatch,
  ]);

  useLayoutEffect(() => {
    getPhotosRequest();
  }, [getPhotosRequest]);

  const handleRemove = useCallback((id: string) => dispatch(removePhoto(id)), [
    dispatch,
  ]);

  const handleAdd = useCallback(
    () =>
      dispatch(
        addPhoto('1', {
          url: ADD_PHOTO_URL,
          width: 796,
          height: 800,
          centerX: 366,
          centerY: 408,
          position: photos.length,
        }),
      ),
    [dispatch, photos],
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Button title="Add Photo" color="#000" onPress={handleAdd} />
        )}
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Photo
            key={item.id}
            source={{uri: item.url}}
            width={item.width}
            height={item.height}
            onRemove={() => handleRemove(item.id)}
          />
        )}
        numColumns={3}
        columnWrapperStyle={styles.listColumnWrapper}
        style={styles.listContainer}
        extraData={photos}
      />
    </View>
  );
};

export default ProfilePhotos;
