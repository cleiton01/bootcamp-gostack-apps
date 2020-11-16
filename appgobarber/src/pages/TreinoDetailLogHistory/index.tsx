import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useRoute, useNavigation, Text } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  BackButton,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ExercicioContainer,
} from './styles';

interface RouteParams {
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

const TreinoDetail: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;

  const [selectedTreino, setSelectedTreino] = useState<RouteParams>(params);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>
          Treino {selectedTreino.nome}
          {'\n'}
          <UserName>{selectedTreino.tipo}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={signOut}>
          <Icon name="logout" size={28} color="#ff9000" />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={selectedTreino.exercicios}
        keyExtractor={(exercicio) => exercicio.nomeExercicio}
        renderItem={({ item: exercicio }) => (
          <ExercicioContainer>
            <ProviderContainer>
              <Icon name="dumbbell" size={20} color="#ff9000" />
              <ProviderMetaText>{exercicio.nomeExercicio}</ProviderMetaText>
              <ProviderMetaText>
                {exercicio.serie}x{exercicio.repeticoes}
              </ProviderMetaText>
            </ProviderContainer>
            <ProviderContainer>
              <Icon name="speedometer" size={20} color="#ff9000" />
              <ProviderMetaText>{exercicio.cadencia}</ProviderMetaText>
            </ProviderContainer>
            <ProviderContainer>
              <Icon name="note-text" size={20} color="#ff9000" />
              <ProviderMetaText>{exercicio.metodo_avancado}</ProviderMetaText>
            </ProviderContainer>
          </ExercicioContainer>
        )}
      />
    </Container>
  );
};

export default TreinoDetail;
