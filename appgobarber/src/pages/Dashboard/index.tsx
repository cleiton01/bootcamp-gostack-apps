import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ReloaderButton,
} from './styles';

export interface Provider {
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

export interface Exercicios {
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
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('treino/3').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const reloadPage = useCallback(() => {
    api.get('treino/3').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const handleSelectProvider = useCallback(
    (providerId: number) => {
      const exercicios = providers.filter(
        (provider) => provider.id === providerId,
      );

      navigation.navigate('TreinoDetail', exercicios[0]);
    },
    [navigation, providers],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.username}</UserName>
        </HeaderTitle>
        <>
          <ReloaderButton onPress={() => reloadPage()}>
            <Icon name="reload" size={28} color="#ff9000" />
          </ReloaderButton>

          <ProfileButton onPress={signOut}>
            <Icon name="logout" size={28} color="#ff9000" />
          </ProfileButton>
        </>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={<ProvidersListTitle>Treinos</ProvidersListTitle>}
        renderItem={({ item: provider }) => (
          <ProviderContainer onPress={() => handleSelectProvider(provider.id)}>
            <ProviderInfo>
              <ProviderName>
                <Icon name="dumbbell" size={24} color="#ff9000" />
                {provider.nome}
              </ProviderName>
              <ProviderMeta>
                <ProviderMetaText>Tipo: {provider.tipo}</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />

      <ProvidersList
        data={providers}
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={<ProvidersListTitle>Treinos</ProvidersListTitle>}
        renderItem={({ item: provider }) => (
          <ProviderContainer onPress={() => handleSelectProvider(provider.id)}>
            <ProviderInfo>
              <ProviderName>
                <Icon name="dumbbell" size={24} color="#ff9000" />
                {provider.nome}
              </ProviderName>
              <ProviderMeta>
                <ProviderMetaText>Tipo: {provider.tipo}</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
