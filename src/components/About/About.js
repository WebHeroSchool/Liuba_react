import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import '../../images/background.png'

const octokit = new Octokit();

class About extends React.Component{
  state = {
    isLoading: true,
    repoList: [],
    infoProfile: [],
    isError: false,
    error: {}
  }



  componentDidMount () {
          octokit.repos.listForUser({
           username: 'Liubovminakova'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    })

    .catch(err => {
      this.setState({
        isLoading: false,
        isError: true,
        error: 'ERROR'
      })
    })




  octokit.rest.users.getByUsername({
  username: 'Liubovminakova'
}).then(({ data }) => {
  this.setState({
    infoProfile: data,
    isLoading: false
  })
})

.catch(err =>{
  this.setState({
    isLoading: false,
    isError: true,
    error: 'ERROR'
  })
})



}

  render(){
      const { isLoading, repoList, isError, error, infoProfile } = this.state;
      return(
          <div className={styles.wrap}>
          { isLoading ? <CircularProgress /> :
          <div>
            <h1 className={styles.title}> {infoProfile.name} </h1>
            <img className={styles.avatar} src={infoProfile.avatar_url} alt='Avatar'/>
            <h3 className={styles.subtitle}> My repositories: </h3>
              {isError ? `Not found!` + " " + error :
            <ol>
            {repoList.map(repo =>(<li key={repo.id} className={styles.list}>
              <a href={repo.svn_url} className={styles.element}> {repo.name} </a>
              </li>))}
            </ol>
          }
        </div>
      }
        </div>
      );
  }
}

export default About;
