import React from 'react';
import styles from './About.module.css';
import { LinearProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';


const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoProfile: [],
    isError: false,
    isErrorRepositories: false,
    error: {},
    firstRepo: 0,
    lastRepo: 2

  }

  lastPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo - 2,
            lastRepo: this.state.lastRepo - 2
        });
    };

  nextPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo + 2,
            lastRepo: this.state.lastRepo + 2
        });
    };




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
        isErrorRepositories: true,
        error: err
      });
    });




  octokit.rest.users.getByUsername({
  username: 'Liubovminakova'
}).then(({ data }) => {
  this.setState({
    infoProfile: data,
    isLoading: false
  })
})

.catch(err => {
  this.setState({
    isLoading: false,
    isError: true,
    error: err
  })
})


}

refreshPage = () => window.location.reload();

  render(){
      const { isLoading, repoList, infoProfile, isError, firstRepo, lastRepo } = this.state;
      return(
  <div className={styles.wrap}>
        { isLoading && (
                <div>
                    <LinearProgress />
                </div>

        )}
        { !isLoading && isError && (
          <div>
          <header className={styles.row}>
                <div className={styles.column}>
                <figure className={styles.image_error}>
                      <img
                      variant="square"
                      src={infoProfile.avatar_url}
                      alt='Avatar'
                      />
                      <h3>{this.state.error.name}</h3>
                      <p>{this.state.error.message}</p>

                </figure>
                  </div>
                <div className={styles.column}>
                      <h1 className={styles.title}> {infoProfile.name} </h1>
                      <h3 className={styles.subtitle}> {infoProfile.bio} </h3>
                      <h5 className={styles.text}> I’m motivated Front-end Developer seeking an entry-level position with growing organization, where i can learn and make a positive impact. In plan is learn more about JavaScript and React. Also I want to start to learn Vue.JS, PHP and Typescript. And of course do a lot of practice to improve my skills! </h5>
                </div>
          </header>

              <div className={styles.error}>An error has occurred. <br/>  <a onClick={this.refreshPage}>Please reload the page and try again.</a> </div>

          </div>
        )}
        { !isLoading && !isError && repoList.length === 0 && (
          <div>
          <header className={styles.row}>
                <div className={styles.column}>
                      <img
                      className={styles.avatar}
                      variant="square"
                      src={infoProfile.avatar_url}
                      alt='Avatar'
                      />
                  </div>
                <div className={styles.column}>
                      <h1 className={styles.title}> {infoProfile.name} </h1>
                      <h3 className={styles.subtitle}> {infoProfile.bio} </h3>
                      <h5 className={styles.text}> I’m motivated Front-end Developer seeking an entry-level position with growing organization, where i can learn and make a positive impact. In plan is learn more about JavaScript and React. Also I want to start to learn Vue.JS, PHP and Typescript. And of course do a lot of practice to improve my skills! </h5>
                </div>
          </header>

              <div className={styles.error}>Error: no repositories found.<br/> You must add one before updating <a href={infoProfile.html_url}>github.com</a> </div>

          </div>
        )}
        { !isLoading && !isError && repoList.length > 0 && (

  <div>
                <header className={styles.row}>
                      <div className={styles.column}>
                            <img
                            className={styles.avatar}
                            variant="square"
                            src={infoProfile.avatar_url}
                            alt='Avatar'
                            />
                        </div>
                      <div className={styles.column}>
                            <h1 className={styles.title}> {infoProfile.name} </h1>
                            <h3 className={styles.subtitle}> {infoProfile.bio} </h3>
                            <h5 className={styles.text}> I’m motivated Front-end Developer seeking an entry-level position with growing organization, where i can learn and make a positive impact. In plan is learn more about JavaScript and React. Also I want to start to learn Vue.JS, PHP and Typescript. And of course do a lot of practice to improve my skills! </h5>
                      </div>
                </header>

                <main className={styles.projects}>
                    <h2 className={styles.main__title}>My projects:</h2>
                    <a className={styles.link__projects}
                            href="https://12-liubovminakova.vercel.app/"
                            target='_blank'
                            rel='noopener noreferrer'>
                            1. Html & CSS Site
                    </a>
                    <a className={styles.link__projects}
                            href="https://webheroschool.github.io/-Js/"
                            target="_blank"
                            rel="noopener noreferrer">
                            2. Game "Find a bug"
                    </a>
                    <a className={styles.link__projects}
                            href="https://webheroschool.github.io/Liuba_react/"
                            target="_blank"
                            rel="noopener noreferrer">
                            3. To-do App
                    </a>
                </main>

                <section className={styles.main}>
                    <h2 className={styles.repo__title}> My repositories: </h2>
                    <div className={styles.repos}>
                    <div className={styles.list}>
                    {repoList.slice(firstRepo, lastRepo).map(repo =>
                    <ul key={repo.id}>
                    <div className={styles.repo}>
                    <div className={styles.repo_wrapped}>
                    <a
                    href={repo.html_url}
                    className={styles.repo_link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                      {repo.name}
                      </a>
                      <div className={styles.repo_info}>
                     <div className={styles[`repo_info__${repo.language}-icon`.toLowerCase()]}></div>
                        <p className={styles.repo_language}>{repo.language}</p>
                        <p className={styles.repo_star}>{repo.stargazers_count}</p>
                        <p className={styles.repo_fork}>{repo.forks}</p>
                        <p className={styles.repo_update}>{repo.updated_at.split("T")[0].split("-").reverse().join(".")}</p>
                    </div>
                      </div>
                      </div>
                  </ul>
                )}
                </div>
                </div>
                <div className={styles.buttons_wrap}>
          <button className={styles.button}
             onClick={this.lastPage}
             disabled={firstRepo < 2}>
              Previous
          </button>
          <button className={styles.button}
             onClick={this.nextPage}
             disabled={repoList.length < lastRepo}>
              Next
          </button>
        </div>
            </section>

  </div>
          )}


  </div>
          );


      }
}
export default About;
