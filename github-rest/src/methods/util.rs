use crate::{
    builders::{Builder, CommitCommentBuilder},
    model::commits::comments::CommitComment,
    GithubRestError, Requester,
};

/// Help I'm going insane
pub async fn helper_for_helper_for_helper(
    client: &impl Requester,
    url: String,
    commit_hash: String,
    body: String,
    path: Option<String>,
    position: Option<String>,
) -> Result<CommitComment, GithubRestError> {
    let (owner, repo) = owner_and_repo(url);

    let mut comment = CommitCommentBuilder::new()
        .owner(owner)
        .repo(repo)
        .sha(commit_hash)
        .body(body);

    comment = path_and_position(comment, path, position);

    comment.execute(client).await
}

/// Gets the owner and repository from the `html_url` field used by so many of
/// our model.
pub fn owner_and_repo(html_url: String) -> (String, String) {
    let f = |s: &str| {
        if s.contains("https:") || s.is_empty() || s.eq("github.com") {
            None
        } else {
            Some(s.to_owned())
        }
    };

    let split: Vec<String> = html_url.split('/').filter_map(f).collect();

    (split[0].clone(), split[1].clone())
}

pub fn path_and_position(
    mut builder: CommitCommentBuilder,
    path: Option<String>,
    position: Option<String>,
) -> CommitCommentBuilder {
    if let Some(s) = path {
        builder = builder.path(s);
    }

    if let Some(s) = position {
        builder = builder.position(s);
    }

    builder
}
