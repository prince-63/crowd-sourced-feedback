class ApplicationConstants {
    static JWT_SECRET = process.env.JWT_SECRET;
    static JWT_DEFAULT_SECRET = "jxgEQeXHuPq8VdbyYFNkANdudQ53YUn4";
    static AUTHORIZATION = "Authorization";
    static JWT_TOKEN_EXPIRATION = new Date(new Date().getTime() + 3600 * 60 * 1000);
}

export default ApplicationConstants;