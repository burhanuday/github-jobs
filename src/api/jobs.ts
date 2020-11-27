export const fetchJobsFromGithubApi = async (page: number) => {
  const response = await fetch(
    `https://github-jobs-proxy.appspot.com/positions?description=javascript&page=${page}&location=`
  );
  return await response.json();
};
