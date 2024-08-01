import { StyleSheet, View, FlatList } from 'react-native';
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from '../components/CategoryGridTitle';

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverView', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#000000', // لون الخلفية
    },
});
