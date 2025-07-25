# NextJS Health-Checked App on EKS

This is a fully containerized, health-checked, and production-ready Next.js application with dark mode support and observability tooling. It includes:

- A `/status` endpoint for readiness/liveness checks
- Git commit SHA injected at build time
- A toggleable Tailwind dark mode landing page
- Sentry error monitoring and custom Datadog metrics
- GitHub Actions CI/CD pipeline pushing Docker image to AWS ECR
- Kubernetes manifests with probes and LoadBalancer service

### Run Locally

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000

### Run CI Locally

```bash
pnpm lint
pnpm test
pnpm build
```

### Deploy to EKS

Update image tag in k8s/deployment.yml

Apply manifests:

```bash
kubectl apply -f k8s/
```
