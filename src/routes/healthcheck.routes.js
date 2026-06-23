import { Router } from 'express';
import { healthcheck } from "../controllers/healthcheck.controller.js"

const router = Router();

// Healthcheck endpoint — GET /
// This router is mounted under `/api/v1/healthcheck`, so the full path is `/api/v1/healthcheck`
router.route('/').get(healthcheck);

export default router