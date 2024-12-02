import { Router, Response } from 'express';
import { Request } from 'express-serve-static-core';

import authenticate from './controllers/authenticate';
import searchPackages from './controllers/searchPackages';
import downloadPackage from './controllers/downloadPackage';
import searchByRegEx from './controllers/searchByRegEx'
import uploadPackage from './controllers/uploadPackage';

import { authMiddleware, permMiddleware } from './middleware/auth_middleware';

const router = Router();

router.post('/packages', authMiddleware, permMiddleware, async (req: Request, res: Response) => {
  // console.log('in router POST /packages'); //delete me
  if (!req.middleware.permissions.searchPerm && !req.middleware.permissions.adminPerm) {
    res.status(403).send('Unauthorized - missing permissions');
    return;
  }
  return await searchPackages(req, res);
});

router.post('/package/byRegEx', authMiddleware, permMiddleware, async (req: Request, res: Response) => {
  // TODO: Implement the logic to fetch the packages by regular expression from the database
  // console.log('in router POST /packages/byRegEx'); //delete me
  if (!req.middleware.permissions.searchPerm && !req.middleware.permissions.adminPerm) {
    res.status(403).send('Unauthorized - missing permissions');
    return;
  }
  return await searchByRegEx(req, res);
});

router.delete('/reset', (req: Request, res: Response) => {
  // TODO: Implement the logic to reset the database
});

router.get('/package/:id', authMiddleware, permMiddleware, async (req: Request, res: Response) => {
  // console.log('in router GET /package/:id'); //delete me
  if (!req.middleware.permissions.downloadPerm && !req.middleware.permissions.adminPerm) {
    res.status(403).send('Unauthorized - missing permissions');
    return;
  }
  return await downloadPackage(req, res);
});

router.put('/package/:id', (req: Request, res: Response) => {
  // console.log('in router PUT /package/:id'); //delete me
  const id = req.params.id;
  // TODO: Implement the logic to update the package by id in the database
});

router.post('/package', async (req: Request, res: Response) => {
  if (!req.middleware.permissions.uploadPerm && !req.middleware.permissions.adminPerm) {
    res.status(403).send('Unauthorized - missing permissions');
    return;
  }
  return await uploadPackage(req, res);
});

router.get('/package/:id/rate', (req: Request, res: Response) => {
  const id = req.params.id;
  // TODO: Implement the logic to fetch the rating of the package by id from the database
});

router.post('/package/:id/cost', (req: Request, res: Response) => {
  const id = req.params.id;
  // TODO: Implement the logic to calculate the cost of the package by id
});

router.put('/authenticate', async (req: Request, res: Response) => {
  console.log("hi");
  return await authenticate(req, res);
});

router.post('/package/byRegEx', authMiddleware, permMiddleware, async (req: Request, res: Response) => {
  // TODO: Implement the logic to fetch the packages by regular expression from the database
  if (!req.middleware.permissions.searchPerm && !req.middleware.permissions.adminPerm) {
    res.status(403).send('Unauthorized - missing permissions');
    return;
  }
  return await searchByRegEx(req, res);
});

router.get('/track', (req: Request, res: Response) => {
  // TODO: Implement the logic to return the track
});

router.delete('/deleteUser', (req: Request, res: Response) => {
  // TODO: Implement the logic to delete the user
});

router.post('/createUser', (req: Request, res: Response) => {
  // TODO: Implement the logic to create the user
});

router.get('/uploadHistory/:id', (req: Request, res: Response) => {
  // TODO: Implement the logic to fetch the upload history by id
});

router.get

export default router;