import {Question, Snippet} from "./components/Containers";
import * as React from "react";
import Terminal from "./components/Terminal";

function makeQuestion(command, text) {
    return <>
        <Terminal text={command}/>
        <Question>
            {text}
        </Question>
    </>
}

const any_pending_pods =
    makeQuestion(
        "kubectl get pods",
        <>Are there any <Snippet>PENDING</Snippet> pods?</>)

const is_cluster_full =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        "Is the cluster full?")

const provision_bigger_cluster =
    "Provision a bigger cluster."

const are_hitting_resourcequota_limits =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        "Are you hitting the ResourceQuota limits?")

const relax_resourcequota_limits =
    "Relax the ResourceQuota limits."

const are_mounting_pending_perisistentvolume_claim =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        <>Are you mounting a <Snippet>PENDING</Snippet> PersistentVolumeClaim?</>)

const fix_persistentvolumeclaim =
    "Fix the PersistentVolumeClaim."

const is_pod_assigned_to_node =
    makeQuestion(
        "kubectl get pods -o wide",
        "Is The Pod assigned to the Node?")

const fix_scheduler =
    "There is an issue with the scheduler";

const fix_kubelet =
    "There is an issue with the Kubelet"

const are_pods_running =
    makeQuestion(
        "kubectl get pods",
        <>Are the pods <Snippet>RUNNING</Snippet>?</>)

const can_see_logs =
    makeQuestion(
        "kubectl logs <pod-name>",
        "Can you see the logs for the app?");

const fix_the_application =
    "Fix the issue in the application"

const did_container_die_too_quickly =
    makeQuestion(
        "kubectl logs <pod-name>",
        "Did the container die too quickly?")

const is_pod_status_imagepullbackoff =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        <>Is the Pod status <Snippet>ImagePullBackOff</Snippet>?</>)

const is_pod_status_crashloopbackoff =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        <>Is the Pod status <Snippet>CrashLoopBackOff</Snippet>?</>)

const is_pod_status_runcontainererror =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        <>Is the Pod status <Snippet>RunContainerError</Snippet>?</>)

const fix_mounting_volumes =
    "This issue is likely to be with mounting volumes"

const is_any_container_running =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        <>Is any container <Snippet>Running</Snippet>?</>)

const fix_node_lifecycle_controller =
    "The issue it wih the node-lifecycle controller";

const did_fix_crashing_app =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        "Did you inspect the logs and fix the crashing app?")

const fix_crashing_app =
    "Fix the crashing app."

const did_forget_cmd_in_dockerfile =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        <>Did you forget the <Snippet>CMD</Snippet> instruction in the Dockerfile?</>
    );

const fix_dockerfile = "Fix the Dockerfile."

const is_restarting_frequently = makeQuestion(
    "kubectl describe pod <pod-name>",
    <>Is the Pod restarting frequently, cycling between <Snippet>Running</Snippet> and <Snippet>CrashLoopBackoff</Snippet>?</>
)

const fix_liveness_probe =
    "Fix the liveness probe";

const is_image_name_correct = makeQuestion(
    "kubectl describe pod <pod-name>",
    <>Is the name of the image correct?</>
)

const fix_image_name =
    "Fix the image name."

const is_image_tag_valid = makeQuestion(
    "kubectl describe pod <pod-name>",
    <>Is the image tag valid? Does it exist?</>)

const fix_image_tag =
    "Fix the tag";

const is_image_repo_private = makeQuestion(
    "kubectl describe pod <pod-name>",
    "Are you pulling images from a private registry?")

const fix_private_registry =
    "Configure pulling images from a private registry"

const fix_cri_or_kubelet =
    "This issue could be with the CRI or Kubelet"

const can_see_previous_logs =
    makeQuestion(
        "kubectl logs <pod-name> --previous",
        "Can you see the logs for the app?"
    )

const are_pods_ready =
    makeQuestion(
        "kubectl get pods",
        <>Are the Pods <Snippet>READY</Snippet>?</>
    )

const is_readiness_probe_failing =
    makeQuestion(
        "kubectl describe pod <pod-name>",
        "Is the Readiness probe failing?"
    )

const fix_readiness_probe =
    "Fix the Readiness probe"

const can_access_app =
    makeQuestion(
        "kubectl port-forward <pod-name> 8080:<pod-port>",
        "Can you access the app?"
    )

const is_port_exposed_and_listening =
    makeQuestion(
        "kubectl port-forward <pod-name> 8080:<pod-port>",
        <>Is the port exposed by the container correct and listening on <Snippet>0.0.0.0</Snippet>?</>
    )

const fix_app =
    <>Fix the app. It should listen on <Snippet>0.0.0.0</Snippet>. Update the <Snippet>containerPort</Snippet></>

const unknown = "I'm out of ideas.... sorry."

const pods_running_correctly = "Pods are running correctly."

const can_see_endpoints =
    makeQuestion(
        "kubectl describe service <service-name>",
        "Can you see a list of endpoints?"
    )

const is_selector_matching =
    makeQuestion(
        "kubectl describe service <service-name>",
        "Is the Selector matching the right Pod label?"
    )

const fix_service_selector = "Fix the Service selector. It has to match the Pod labels."

const has_ip_assigned =
    makeQuestion(
        "kubectl describe service <service-name>",
        "Does the Pod have an IP address assigned?"
    )

const fix_controller_manager =
    "There is an issue with the Controller manager"

const can_visit_app_after_endpoints =
    makeQuestion(
        "kubectl port-forward service/<service-name> 8080:<service-port>",
        "Can you visit the app?"
    )

const are_ports_matching  =
    makeQuestion(
        "kubectl port-forward service/<service-name> 8080:<service-port>",
        "Is the targetPort on the Service matching containerPort in the Pod?"
    )

const fix_ports =
    "Fix tge Service targetPort and the containerPort"

const fix_kube_proxy =
    "The issue could be with Kube Proxy"


const service_running_correctly =
    "The Service is running correctly"

const can_see_backends =
    makeQuestion(
        "kubectl describe ingress <ingress-name>",
        "Can you see a list of Backends?"
    )

const are_service_name_and_port_matching  =
    makeQuestion(
        "kubectl describe ingress <ingress-name>",
        "Are the serviceName and servicePort matching the Service?"
    )

const can_visit_app_after_backends =
    makeQuestion(
        "kubectl port-forward <ingress-pod-name> 8080:<ingress-port>",
        "Can you visit the app?"
    )

const fix_ingress_controller =
    "The issue is specific to the Ingress controller. Consult the docs for your ingress."

const fix_ingress_name_and_port =
    "Fix the ingress service.name and service.port.number"

const ingress_running_correctly =
    "The Ingress is running correctly."

const can_visit_from_public_network =
    makeQuestion(
        "curl <public-url>",
        "The app should be working. Can you visit it from the public internet?"
    )

const check_infrastructure =
    "The issue is likely to be with the infrastructure and how the cluster is exposed"

const working =
    "It's working."

export const Screens = {
    any_pending_pods,
    provision_bigger_cluster,
    is_cluster_full,
    are_hitting_resourcequota_limits,
    relax_resourcequota_limits,
    are_mounting_pending_perisistentvolume_claim,
    fix_persistentvolumeclaim,
    is_pod_assigned_to_node,
    fix_scheduler,
    fix_kubelet,
    are_pods_running,
    can_see_logs,
    fix_the_application,
    did_container_die_too_quickly,
    is_pod_status_imagepullbackoff,
    is_pod_status_crashloopbackoff,
    is_pod_status_runcontainererror,
    fix_mounting_volumes,
    is_any_container_running,
    fix_node_lifecycle_controller,
    did_fix_crashing_app,
    fix_crashing_app,
    did_forget_cmd_in_dockerfile,
    fix_dockerfile,
    is_restarting_frequently,
    fix_liveness_probe,
    is_image_name_correct,
    fix_image_name,
    is_image_tag_valid,
    fix_image_tag,
    is_image_repo_private,
    fix_private_registry,
    fix_cri_or_kubelet,
    can_see_previous_logs,
    are_pods_ready,
    is_readiness_probe_failing,
    fix_readiness_probe,
    can_access_app,
    is_port_exposed_and_listening,
    fix_app,
    unknown,
    pods_running_correctly,
    can_see_endpoints,
    is_selector_matching,
    fix_service_selector,
    has_ip_assigned,
    fix_controller_manager,
    can_visit_app_after_endpoints,
    are_ports_matching,
    fix_ports,
    fix_kube_proxy,
    service_running_correctly,
    can_see_backends,
    are_service_name_and_port_matching,
    can_visit_app_after_backends,
    fix_ingress_controller,
    fix_ingress_name_and_port,
    ingress_running_correctly,
    can_visit_from_public_network,
    check_infrastructure,
    working
}
