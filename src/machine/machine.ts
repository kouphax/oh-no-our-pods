import {setup} from "xstate";


function track(target) {

}

export type Events = { type: 'yes' }
    | { type: 'no' }
    | { type: 'continue' }
    | { type: 'reset' }
    | { type: 'back' }
    | { type: 'navigate', target: string }

export const debugMachine =  setup({
    types: {} as {
        events: Events
    },
}).createMachine({
    id: 'debug',
    initial: 'ready',
    states: {
        ready: {
            on: {
                continue: 'any_pending_pods'
            }
        },
        any_pending_pods: {
            on: {
                yes: 'is_cluster_full',
                no: 'are_pods_running'
            }
        },
        is_cluster_full: {
            on: {
                yes: 'provision_bigger_cluster',
                no: 'are_hitting_resourcequota_limits'
            }
        },
        provision_bigger_cluster: {
            on: {
                reset: 'ready'
            }
        },
        are_hitting_resourcequota_limits: {
            on: {
                yes: 'relax_resourcequota_limits',
                no: 'are_mounting_pending_perisistentvolume_claim'
            }
        },
        relax_resourcequota_limits: {
            on: {
                reset: 'ready'
            }
        },
        are_mounting_pending_perisistentvolume_claim: {
            on: {
                yes: 'fix_persistentvolumeclaim',
                no: 'is_pod_assigned_to_node'
            }
        },
        fix_persistentvolumeclaim: {
            on: {
                reset: 'ready'
            }
        },
        is_pod_assigned_to_node: {
            on: {
                yes: 'fix_kubelet',
                no: 'fix_scheduler'
            }
        },
        fix_scheduler: {
            on: {
                reset: 'ready'
            }
        },
        fix_kubelet: {
            on: {
                reset: 'ready'
            }
        },
        are_pods_running: {
            on: {
                yes: 'are_pods_ready',
                no: 'can_see_logs'
            }
        },
        can_see_logs: {
            on: {
                yes: 'fix_the_application',
                no: 'did_container_die_too_quickly'
            }
        },
        fix_the_application: {
            on: {
                reset: 'ready'
            }
        },
        did_container_die_too_quickly: {
            on: {
                yes: 'can_see_previous_logs',
                no: 'is_pod_status_imagepullbackoff'
            }
        },
        is_pod_status_imagepullbackoff: {
            on: {
                yes: 'is_image_name_correct',
                no: 'is_pod_status_crashloopbackoff'
            }
        },
        is_pod_status_crashloopbackoff: {
            on: {
                yes: 'did_fix_crashing_app',
                no: 'is_pod_status_runcontainererror'
            }
        },
        is_pod_status_runcontainererror: {
            on: {
                yes: 'fix_mounting_volumes',
                no: 'is_any_container_running'
            }
        },
        fix_mounting_volumes: {
            on: {
                reset: 'ready'
            }
        },
        is_any_container_running: {
            on: {
                yes: 'fix_node_lifecycle_controller',
                no: 'unknown'
            }
        },
        fix_node_lifecycle_controller: {
            on: {
                reset: 'ready'
            }
        },
        did_fix_crashing_app: {
            on: {
                yes: 'did_forget_cmd_in_dockerfile',
                no: 'fix_crashing_app'
            }
        },
        fix_crashing_app: {
            on: {
                reset: 'ready'
            }
        },
        did_forget_cmd_in_dockerfile: {
            on: {
                yes: 'fix_dockerfile',
                no: 'is_restarting_frequently'
            }
        },
        fix_dockerfile: {
            on: {
                reset: 'ready'
            }
        },
        is_restarting_frequently: {
            on: {
                yes: 'fix_liveness_probe',
                no: 'unknown'
            }
        },
        fix_liveness_probe: {
            on: {
                reset: 'ready'
            }
        },
        is_image_name_correct: {
            on: {
                yes: 'is_image_tag_valid',
                no: 'fix_image_name'
            }
        },
        fix_image_name: {
            on: {
                reset: 'ready'
            }
        },
        is_image_tag_valid: {
            on: {
                yes: 'is_image_repo_private',
                no: 'fix_image_tag'
            }
        },
        fix_image_tag: {
            on: {
                reset: 'ready'
            }
        },
        is_image_repo_private: {
            on: {
                yes: 'fix_private_registry',
                no: 'fix_cri_or_kubelet'
            }
        },
        fix_private_registry: {
            on: {
                reset: 'ready'
            }
        },
        fix_cri_or_kubelet: {
            on: {
                reset: 'ready'
            }
        },
        can_see_previous_logs: {
            on: {
                yes: 'fix_the_application',
                no: 'did_container_die_too_quickly'
            }
        },
        are_pods_ready: {
            on: {
                yes: 'can_access_app',
                no: 'is_readiness_probe_failing'
            }
        },
        is_readiness_probe_failing: {
            on: {
                yes: 'fix_readiness_probe',
                no: 'unknown'
            }
        },
        fix_readiness_probe: {
            on: {
                reset: 'ready'
            }
        },
        can_access_app: {
            on: {
                yes: 'pods_running_correctly',
                no: 'is_port_exposed_and_listening'
            }
        },
        is_port_exposed_and_listening: {
            on: {
                yes: 'unknown',
                no: 'fix_app'
            }
        },
        fix_app: {
            on: {
                reset: 'ready'
            }
        },
        unknown: {
            on: {
                reset: 'ready'
            }
        },
        pods_running_correctly: {
            on: {
                continue: 'can_see_endpoints'
            }
        },
        can_see_endpoints: {
            on: {
                yes: 'can_visit_app_after_endpoints',
                no: 'is_selector_matching'
            }
        },
        is_selector_matching: {
            on: {
                yes: 'has_ip_assigned',
                no: 'fix_service_selector'
            }
        },
        fix_service_selector: {
            on: {
                reset: 'ready'
            }
        },
        has_ip_assigned: {
            on: {
                yes: 'fix_kubelet',
                no: 'fix_controller_manager'
            }
        },
        fix_controller_manager: { type: "final" },
        can_visit_app_after_endpoints: {
            on: {
                yes: 'service_running_correctly',
                no: 'are_ports_matching'
            }
        },
        are_ports_matching: {
            on: {
                yes: 'fix_kube_proxy',
                no: 'fix_ports'
            }
        },
        fix_ports: {
            on: {
                reset: 'ready'
            }
        },
        fix_kube_proxy: {
            on: {
                reset: 'ready'
            }
        },
        service_running_correctly: {
            on: {
                continue: 'can_see_backends'
            }
        },
        can_see_backends: {
            on: {
                yes: 'can_visit_app_after_backends',
                no: 'are_service_name_and_port_matching'
            }
        },
        are_service_name_and_port_matching: {
            on: {
                yes: 'fix_ingress_controller',
                no: 'fix_ingress_name_and_port'
            }
        },
        can_visit_app_after_backends: {
            on: {
                yes: 'ingress_running_correctly',
                no: 'fix_ingress_controller'
            }
        },
        fix_ingress_controller: { type: "final" },
        fix_ingress_name_and_port: { type: "final" },
        ingress_running_correctly: {
            on: {
                continue: 'can_visit_from_public_network'
            }
        },
        can_visit_from_public_network: {
            on: {
                yes: 'working',
                no: 'check_infrastructure'
            }
        },
        check_infrastructure: {
            on: {
                reset: 'ready'
            }
        },
        working: {
            on: {
                reset: 'ready'
            }
        }

    }
})

