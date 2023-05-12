
import { ActivityIndicator, StyleSheet, View ,Text} from 'react-native';
import { APP_STRINGS, COLORS, FONT_SIZES } from '../utils/constants';

export function LoadingSpinner(loading) {
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={COLORS.loading_indicator} style={styles.loadingStyle} />
                <Text style={styles.subText}>{APP_STRINGS.loading_text}</Text>
            </View>
        )
    }
    return null
}


const styles = StyleSheet.create({
    loadingStyle: {
        marginBottom: 15,
    },
    subText: {
        fontSize: FONT_SIZES.medium,
        color: COLORS.result_loading,
        textAlign: 'center',
        fontWeight: "600"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
