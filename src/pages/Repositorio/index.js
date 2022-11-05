import React, { useState, useEffect } from 'react';
import { Container, Owner, Loading, BackButton, IssuesList, PageAction, PageFilter } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

export default function Repositorio({ match }) {

  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] =useState('closed');

  useEffect(() => {

    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      console.log(issuesData.data);

      setLoading(false);

    }

    load();

  }, [match.params.repositorio]);



  useEffect(() => {

    async function loadIssue() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: filter,
          page,
          per_page: 5
        },
      });
      setIssues(response.data)
    }

    loadIssue();
  }, [filter, page])



  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }




  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    )
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>

      <Owner>
        <img
          src={repositorio.owner.avatar_url}
          alt={repositorio.owner.login}
        />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>


      <IssuesList>


        <PageFilter>
          <button
            type='button'
            onClick={() => setFilter('open')}>
            open
          </button>
          <button 
          type='button' 
          onClick={() => setFilter('all')}>
            all
          </button>
          <button 
          type='button' 
          onClick={() => setFilter('closed')}>
            closed
          </button>
        </PageFilter>



        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                <br />
                {issue.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}

              </strong>

              <p>{issue.user.login}</p>

            </div>

          </li>
        ))}
      </IssuesList>

      <PageAction>
        <button
          type='button'
          onClick={() => handlePage('back')}
          disabled={page < 2}
        >
          Voltar
        </button>
        <button type='button' onClick={() => handlePage('next')}>
          Próxima
        </button>
      </PageAction>

    </Container>
  )
}