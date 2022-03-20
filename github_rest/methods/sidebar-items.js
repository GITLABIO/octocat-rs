initSidebarItems({"enum":[["IssueState","docs https://docs.github.com/en/rest/reference/issues#list-issues-assigned-to-the-authenticated-user--parametersRepresents the state of an issue. Possible variants are open, closed, and all."],["Role",""]],"fn":[["add_to_org","tags orgsput `/orgs/{org}/memberships/{username}`docs https://docs.github.com/rest/reference/orgs#set-organization-membership-for-a-userSet organization membership for a user Only authenticated organization owners can add a member to the organization or update the member’s role."],["api_info",""],["comment_on_commit","tags repospost `/repos/{owner}/{repo}/commits/{commit_sha}/comments`docs https://docs.github.com/rest/reference/repos#create-a-commit-commentCreate a commit comment Create a comment for a commit using its `:commit_sha`."],["create_gist","tags gistspost `/gists`docs https://docs.github.com/rest/reference/gists#create-a-gistCreate a gist Allows you to add a new gist with one or more files."],["create_issue","tags issuespost `/repos/{owner}/{repo}/issues`docs https://docs.github.com/rest/reference/issues#create-an-issueCreate an issue Any user with pull access to a repository can create an issue. If issues are disabled in the repository, the API returns a `410 Gone` status."],["delete_gist","tags gistsdelete `/gists/{gist_id}`docs https://docs.github.com/rest/reference/gists#delete-a-gistDelete a gist"],["get_commit",""],["get_commits","tags reposget `/repos/{owner}/{repo}/commits`docs https://docs.github.com/rest/reference/repos#list-commitsList commits Signature verification object"],["get_followers","tags usersget `/user/followers`docs https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-userList followers of the authenticated user Lists the people following the authenticated user."],["get_following","tags usersget `/user/following`docs https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-followsList the people the authenticated user follows Lists the people who the authenticated user follows."],["get_issues","tags issuesget `/repos/{owner}/{repo}/issues`docs https://docs.github.com/rest/reference/issues#list-repository-issuesList repository issues List issues in a repository."],["get_pulls","tags pullsget `/repos/{owner}/{repo}/pulls`docs https://docs.github.com/rest/reference/pulls#list-pull-requestsList pull requests Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see GitHub’s products in the GitHub Help documentation."],["get_user_followers","tags usersget `/users/{username}/followers`docs https://docs.github.com/rest/reference/users#list-followers-of-a-userList followers of a user Lists the people following the specified user."],["get_user_following","tags usersget `/users/{username}/following`docs https://docs.github.com/rest/reference/users#list-the-people-a-user-followsList the people a user follows Lists the people who the specified user follows."],["get_user_gists","tags gistsget `/users/{username}/gists`docs https://docs.github.com/rest/reference/gists#list-gists-for-a-userList gists for a user Lists public gists for the specified user:"],["react_to_commit_comment","tags reactionspost `/repos/{owner}/{repo}/comments/{comment_id}/reactions`docs https://docs.github.com/rest/reference/reactions#create-reaction-for-a-commit-commentCreate reaction for a commit comment Create a reaction to a commit comment. A response with an HTTP `200` status means that you already added the reaction type to this commit comment."],["zen",""]],"mod":[["prelude","Prelude mod used for methods"]],"struct":[["AddToOrgBody",""],["CommitCommentBody",""],["CreateGistBody",""],["CreateIssueBody",""],["FileContents",""],["GetCommitBody",""],["GetCommitsBody",""],["GetIssuesBody",""],["GetPullsBody",""],["Pagination",""]]});