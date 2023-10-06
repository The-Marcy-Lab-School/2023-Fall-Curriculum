# Git

### When working on a new feature I will...

- Clone the repo
- immediately make a branch so I don't push to main

### When I sit down to start programing I will...

- `git checkout main && git pull` - get the most up-to-date version of `main`
- Switch to my branch
- Edit stuff
- add, commit, and push my branch to the remote version of my branch
- On Github: Make a pull request (PR) to try to merge
- If the merge has conflicts... (skip this if not)
  - Then we know our branch is NOT up to date with `main`
  - `git checkout main && git pull`
  - Switch back to my branch
  - `git merge main`
  - Resolve the conflicts by removing the merge conflic markers
  - add, commit, and push
- If the merge has NO conflicts, make the PR and tag someone for review
- On Github merge the pull request
- On local, everyone should pull from `main`

### Why/When we merge or push/pull:

- On local repository, we merge main into our branch in order to resolve merge conflicts
- On remote repository, we merge our branch into main in order to add new features/update the main branch
- Pull any time a change occurs on the remote repository and we want to update our local repository
- Push any time a change occurs on our local repository and we want to update the remote repository
