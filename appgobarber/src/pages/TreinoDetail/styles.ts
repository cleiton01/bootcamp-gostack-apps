import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Provider {
  id: number;
  user_id: number;
  nome: string;
  tipo: string;
  intervalo: string;
  exercicios: [
    {
      nomeExercicio: string;
      serie: string;
      repeticoes: string;
      cadencia: string;
      metodo_avancado: string;
      peso: string;
    },
  ];
  created_at: string;
  updated_at: string;
}

interface Exercicio {
  nomeExercicio: string;
  serie: string;
  repeticoes: string;
  cadencia: string;
  metodo_avancado: string;
  peso: string;
}

export const Container = styled.View`
  flex: 1;
`;
export const BackButton = styled.TouchableOpacity``;

export const Header = styled.View`
  padding: 20px;
  padding-top: ${getStatusBarHeight()}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
  align-items: center;
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab';
  font-size: 16px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersList = styled(
  FlatList as new () => FlatList<Exercicio>,
).attrs({
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
})``;

export const ProvidersListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const ProviderContainer = styled.View`
  flex-direction: row;
  align-items: stretch;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 5px;
  padding-right: 30px;
  margin-bottom: 2px;

  margin-left: 20px;

  background: #3e3b47;
  border-radius: 10px;
`;

export const ExercicioContainer = styled.View`
  flex-direction: column;
  background: #3e3b47;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 20px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;
