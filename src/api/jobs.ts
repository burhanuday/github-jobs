export const fetchJobsFromGithubApi = async () => {
  const response = await fetch(
    "https://github-jobs-proxy.appspot.com/positions?description=javascript&location=san+francisco"
  );
  return await response.json();
};
