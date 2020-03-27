import { ForbiddenError } from 'auth0-extension-tools';

export default (expectedScope) => (req, res, next) => {
  console.log('marcos', req.user.scope, expectedScope)
  if (!req.user || !req.user.scope || req.user.scope.indexOf(expectedScope) < 0) {
    return next(new ForbiddenError(`Cannot perform action. Missing scope ${expectedScope}`));
  }

  return next();
};
